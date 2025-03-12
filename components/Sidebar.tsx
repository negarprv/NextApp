"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useCheckbox } from "../context/CheckboxContext";
import { checkboxes } from "../constants/constants";
import styled from "@emotion/styled";

const MainDiv = styled.div`
  background-color: white;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 200px;
  gap: 5px;
  padding: 5px 10px;
`;

const Sidebar = () => {
  const { state, dispatch } = useCheckbox();
  const { control, watch } = useForm();

  //   console.log(watch());
  console.log(state.selectedCheckboxs);

  return (
    <MainDiv>
      {checkboxes.map((checkbox) => (
        <Controller
          key={checkbox}
          name={`checkbox-${checkbox}`}
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={state.selectedCheckboxs.includes(checkbox)}
                  onChange={() => {
                    field.onChange(!field.value);
                    dispatch({ type: "TOGGLE", payload: checkbox });
                  }}
                />
              }
              label={`Checkbox-${checkbox}`}
            />
          )}
        />
      ))}
    </MainDiv>
  );
};

export default Sidebar;
