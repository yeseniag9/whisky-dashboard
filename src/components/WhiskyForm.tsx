import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseName, chooseCountry, chooseType, chooseABV } from "../redux/slices/RootSlice";

interface WhiskyFormProps {
  id?: string[]
}

const WhiskyForm = (props:WhiskyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => { 
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data) 
    if (props.id && props.id.length > 0) { 
      server_calls.update(props.id[0], data) 
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name))
      dispatch(chooseCountry(data.country_origin))
      dispatch(chooseType(data.type))
      dispatch(chooseABV(data.abv))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }

  return (
    <div className="pb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Whisky Name</label> 
          <Input {...register('name')} name="name" placeholder="Name" />
        </div>
        <div className="pt-3">
          <label htmlFor="country_origin">Country Origin</label> 
          <Input {...register('country_origin')} name="country_origin" placeholder="Country" />
        </div>
        <div className="pt-3">
          <label htmlFor="type">Type</label> 
          <Input {...register('type')} name="type" placeholder="Type" />
        </div>
        <div className="pt-3">
          <label htmlFor="abv">ABV</label> 
          <Input {...register('abv')} name="abv" placeholder="ABV" />
        </div>
        <div className="flex justify-center">
        <Button 
          className="flex mb-12 bg-amber-600 p-2 pl-7 pr-7 rounded hover:bg-slate-800 text-white mt-10"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskyForm