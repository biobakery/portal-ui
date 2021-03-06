import React from 'react';

import Row from '@ncigdc/uikit/Flex/Row';
import { QuestionIcon } from '@ncigdc/theme/icons';
import { Tooltip } from '@ncigdc/uikit/Tooltip';

export default ({ input, setInput, helpText, displayType, placeholder }) => {
  return (
    <label style={{ display: 'block' }}>
      <Row style={{ justifyContent: 'space-between' }}>
        <div>Type or copy-and-paste a list of {displayType} identifiers</div>
        <Tooltip
          Component={<div style={{ whiteSpace: 'nowrap' }}>{helpText}</div>}
        >
          <QuestionIcon style={{ fontSize: '20px' }} />
        </Tooltip>
      </Row>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          minHeight: 80,
        }}
      />
    </label>
  );
};
