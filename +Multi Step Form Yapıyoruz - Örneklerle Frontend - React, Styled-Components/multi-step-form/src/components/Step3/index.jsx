import React, {useState} from 'react';
import Step from '../Step';

import * as S from './styled';
import formJson from '../../../form.json';

const Step3 = ({formData, onStepSubmit, ...props}) => {
  const {step3} = formJson;
  const {billingType} = formData.step2;
  const [selectedAddons, setSelectedAddons] = useState(
    formData.step3.selectedAddons ?? []
  );

  const changeSelectedAddons = (checked, selectedAddon) => {
    if (checked) {
      //add
      setSelectedAddons([...selectedAddons, selectedAddon]);
    } else {
      //delete
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };

  const checkSelected = (id) => selectedAddons.some((addon) => addon.id === id);

  const onSubmit = () => {
    onStepSubmit('step3', 'step4', {selectedAddons});
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step3>
        {step3[billingType].map((item) => (
          <S.Item key={item.id} isSelected={checkSelected(item.id)}>
            <S.Input
              defaultChecked={checkSelected(item.id)}
              type='checkbox'
              onChange={(e) => changeSelectedAddons(e.target.checked, item)}
            />
            <S.Body>
              <S.Title>{item.title}</S.Title>
              <S.SubDescription>{item.description}</S.SubDescription>
            </S.Body>
            <S.Price>{item.price}</S.Price>
          </S.Item>
        ))}
      </S.Step3>
    </Step>
  );
};

export default Step3;
