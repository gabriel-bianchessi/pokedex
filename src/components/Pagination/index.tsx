import { SetStateAction, useState } from "react";
import api from "../../services/api";
import { Pagination } from "./styles";
import { useForm } from "react-hook-form"

interface IPaginationProps {
  pages: number;
  limit: number;
  offset: number;
  setLimit: React.Dispatch<SetStateAction<number>>;
  setOffset: React.Dispatch<SetStateAction<number>>;
}

export default function (props: IPaginationProps) {
  const { register, handleSubmit, watch } = useForm();


  return (
    <>
      <Pagination>
        <button>Previous</button>
        <button>Next</button>
        <label>Página:</label>
        <input defaultValue={props.offset}/> <span>de {props.pages}</span>
        <label>Pokémons por página:</label>
        <input defaultValue={props.limit} {...register('limit')}/>
      </Pagination>
    </>
  )
}