import { FieldContainer, Input, Label } from '../styledComponents/InputStyles';

export interface IInputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  placeholder?: string;
  error?: string;
}

export const InputField: React.FC<IInputFieldProps> = ({ label, id, value, onChange, placeholder, error }) => {
  return (
    <FieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input isError={!!error} onChange={(e) => onChange(e.target.value as string)} value={value} id={id} placeholder={placeholder ?? ''} />
    </FieldContainer>
  );
};
