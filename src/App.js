import React from 'react';
import { render } from 'react-dom';
import Form from 'react-jsonschema-form';
import RangeSliderWidget from './RangeSliderWidget';

const uiSchema = {
  myRangeField: {
    'ui:widget': 'RangeSliderWidget',
  },
};

const schema = {
  type: 'object',
  properties: {
    myRangeField: {
      type: 'array',
      items: {
        type: 'number',
      },
      minItems: 2,
      maxItems: 2,
      uniqueItems: true,
      title: 'Range',
    },
  },
};

const App = () => {
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      widgets={{
        RangeSliderWidget: RangeSliderWidget,
      }}
      onSubmit={onSubmit}
    />
  );
};

export default App;