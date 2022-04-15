import { FieldContainer, Input, Label, ErrorIconContainer } from '../styledComponents/InputStyles';
import ErrorIcon from '@mui/icons-material/Error';
import { Column, Typography } from '../globalStyles';

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
    <Column>
      <FieldContainer>
        <Label htmlFor={id}>{label}</Label>
        <Input
          isError={!!error}
          onChange={(e) => onChange(e.target.value as string)}
          value={value}
          id={id}
          placeholder={placeholder ?? ''}
        />
        {error && (
          <ErrorIconContainer>
            <ErrorIcon sx={{ color: '#da0000' }} />
          </ErrorIconContainer>
        )}
      </FieldContainer>
      {error && (
        <Typography mt="0.4rem" color="#da0000">
          {error}
        </Typography>
      )}
    </Column>
  );
};
