import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppButton, FormInput } from "../components";
import { EmptyingAllInputs } from "../utils";
import { Container } from "@chakra-ui/react";
import { TransactionContext } from "../context/TransactionContext";

const AppForm = () => {
  const { sendTransaction, transactionLoading } =
    useContext(TransactionContext);

  // console.log(createEthereumContract);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const formSchema = yup.object().shape({
    title: yup.string().required("Please name your memory"),
    description: yup
      .string()
      .required("Please write few lines about your memory"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    sendTransaction(data);
    EmptyingAllInputs();
    reset();
  };
  return (
    <>
      <Container mt={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            tag="input"
            label={"Enter Memory Place or Title"}
            onChange={handleChange}
            type="text"
            name={"title"}
            register={register}
            error={errors["title"]}
          />
          <FormInput
            onChange={handleChange}
            type="text"
            name={"description"}
            register={register}
            error={errors["description"]}
            label={"Enter Few Lines About Your Memory"}
            tag="textarea"
          />

          <AppButton
            type="submit"
            text={transactionLoading ? "Loading..." : "Add Memory"}
            loading={transactionLoading}
          />
        </form>
      </Container>
    </>
  );
};

export default AppForm;
