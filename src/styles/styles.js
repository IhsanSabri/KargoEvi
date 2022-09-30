import styled from "@emotion/styled";

const LabelText = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #262b37;
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

const InputText = styled.input`
  width: 100%;
  margin-top: 6px;
  padding: 12px 0.625rem 12px 0.635rem;
  border: 1px solid rgba(38, 43, 55, 0.24);
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #262b37;
  display: block;

  &:-webkit-autofill {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

const SelectOption = styled.select`
  height: 49px;
  margin-top: 6px;
  width: 100%;
  padding: 0.375rem 1.25rem 0.375rem 0.75rem;
  border: 1px solid rgba(38, 43, 55, 0.24);
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #262b37;
`;

const WeightFormatSpan = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #666666;
  background: transparent;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  display: flex;
  border-left-width: 0;
  position: relative;
  right: 25px;
  height: 0;
  top: 25px;
  width: 0;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;

export { LabelText, InputText, SelectOption, WeightFormatSpan, RadioInput };
