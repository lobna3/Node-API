import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { getClientApi, addClientApi } from "../redux/actions/client.actions";

function Details() {
  const dispatch = useDispatch();
  const { clientList, addClientInfo } = useSelector((state) => state.client);
  useEffect(() => {
    dispatch(getClientApi());
  }, []);

  const {
    handleSubmit,
    handleClose,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      adresse: "",
      telephone: "",
    },
  });

 /* dispatch(
    addClientApi({ addClientInfo : addClientInfo  },handleClose)
  );*/


  return (
    <div className="">
      {clientList &&
        clientList.map((elm) => (
          <h1>
            {elm.nom} {elm.prenom} {elm.id}
          </h1>
        ))}
      ;
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          control={control}
          rules={{ required: false }}
          name="nom"
          render={({ field }) => (
            <input type="text" className="form-control" {...field} />
          )}
        />

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
}

export default Details;
