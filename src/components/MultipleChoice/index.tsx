import React, { useRef } from 'react';
import MulitpleChoice from './MulitpleChoice';
import { StepOption } from '../../types/steps';
import { Text } from 'react-native';

const MultipleChoices = ({
  options,
  onChangeText,
  selectedOption,
  status
}: {
  options: StepOption[],
  onChangeText: (text: string) => void,
  selectedOption: React.RefObject<number>,
  status: 'success' | 'error' | 'neutral' | 'selected'
}) => {

  const mcp2 = useRef(1);
  const mcp3 = useRef(2);
  const mcp4 = useRef(3);
  const mcp1 = useRef(4);

  const checkStatus = (optionRef: number) => {
    if (selectedOption.current === optionRef && status === 'success') {
      return 'success';
    }
    if (selectedOption.current === optionRef && status === 'error') {
      return 'error';
    }
    if (selectedOption.current === optionRef) {
      return 'selected';
    }
    return 'neutral';
  };

  return (
    options.length > 0 ? (
      <>
        <MulitpleChoice
          optionRef={mcp1}
          selectedRef={selectedOption}
          option={options[0].option}
          onSelectOption={onChangeText}
          status={checkStatus(mcp1.current)}
        />
        <MulitpleChoice
          optionRef={mcp2}
          selectedRef={selectedOption}
          option={options[1].option}
          onSelectOption={onChangeText}
          status={checkStatus(mcp2.current)}
        />
        <MulitpleChoice
          optionRef={mcp3}
          selectedRef={selectedOption}
          option={options[2].option}
          onSelectOption={onChangeText}
          status={checkStatus(mcp3.current)}
        />
        <MulitpleChoice
          optionRef={mcp4}
          selectedRef={selectedOption}
          option={options[3].option}
          onSelectOption={onChangeText}
          status={checkStatus(mcp4.current)}
        />
      </>
    ) : (
      <Text>No options</Text>
    )
  );
};

export default MultipleChoices;
