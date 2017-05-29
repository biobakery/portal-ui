/* global process.env.REACT_APP_API */
// @flow
import React from "react";
import JSURL from "jsurl";
import {
  compose,
  withState,
  withProps,
  withPropsOnChange,
  withHandlers
} from "recompose";
import { Column, Row } from "@ncigdc/uikit/Flex";
import { getDefaultCurve } from "@ncigdc/utils/survivalplot";
import withFilters from "@ncigdc/utils/withFilters";
import { makeFilter, addInFilters, toggleFilters } from "@ncigdc/utils/filters";

import FrequentMutationsChart from "@ncigdc/containers/FrequentMutationsChart";
import SsmsTable from "@ncigdc/modern_components/SsmsTable/SsmsTable";
import SurvivalPlotWrapper from "@ncigdc/components/SurvivalPlotWrapper";

const styles = {
  heading: {
    flexGrow: 1,
    fontSize: "2rem",
    marginBottom: 7,
    marginTop: 7
  },
  card: {
    backgroundColor: "white"
  }
};

const initialState = {
  loading: true
};

export default compose(
  withFilters(),
  withState("defaultSurvivalData", "setDefaultSurvivalData", {}),
  withState("selectedSurvivalData", "setSelectedSurvivalData", {}),
  withState("state", "setState", initialState),
  withProps(
    ({
      selectedSurvivalData,
      defaultSurvivalData,
      setDefaultSurvivalData,
      setSelectedSurvivalData,
      filters,
      setState
    }) => ({
      survivalData: {
        legend: selectedSurvivalData.legend || defaultSurvivalData.legend,
        rawData: selectedSurvivalData.rawData || defaultSurvivalData.rawData
      },
      updateData: async () => {
        const survivalData = await getDefaultCurve({
          currentFilters: filters,
          slug: "Explore"
        });

        setDefaultSurvivalData(survivalData);
        setSelectedSurvivalData({});

        setState(s => ({
          ...s,
          loading: false
        }));
      }
    })
  ),
  withPropsOnChange(["filters"], ({ updateData }) => {
    updateData();
  }),
  withHandlers({
    handleClickMutation: ({ push, query, filters }) => ssm => {
      const newFilters = toggleFilters(
        filters,
        makeFilter([{ field: "ssms.ssm_id", value: [ssm.ssm_id] }], false)
      );
      push({
        pathname: "/exploration",
        query: {
          ...query,
          filters: JSURL.stringify(newFilters)
        }
      });
    }
  })
)(
  ({
    viewer,
    filters,
    survivalData,
    selectedSurvivalData,
    setSelectedSurvivalData,
    handleClickMutation
  }) => (
    <Column style={styles.card}>
      <h1 style={{ ...styles.heading, padding: "1rem" }} id="mutated-genes">
        <i className="fa fa-bar-chart-o" style={{ paddingRight: "10px" }} />
        Somatic Mutations
      </h1>

      <Row>
        <Column flex="1" style={{ width: "50%" }}>
          <FrequentMutationsChart
            defaultFilters={filters}
            explore={viewer.frequentMutationsChartFragment}
            context="Explore"
            showSurvivalPlot
            onClickMutation={handleClickMutation}
          />
        </Column>
        <Column flex="1" style={{ width: "50%" }}>
          <SurvivalPlotWrapper
            {...survivalData}
            onReset={() => setSelectedSurvivalData({})}
            height={240}
            survivalPlotloading={false}
          />
        </Column>
      </Row>

      <SsmsTable
        defaultFilters={filters}
        selectedSurvivalData={selectedSurvivalData}
        setSelectedSurvivalData={setSelectedSurvivalData}
        showSurvivalPlot
        context="Cohort"
      />
    </Column>
  )
);
