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
      dispatch(chooseCountry(data.country))
      dispatch(chooseType(data.type))
      dispatch(chooseABV(data.abv))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Whisky Name</label> 
          <Input {...register('name')} name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="country">Country Origin</label> 
          <Input {...register('country')} name="country" placeholder="Country" />
        </div>
        <div>
          <label htmlFor="type">Type</label> 
          <Input {...register('type')} name="type" placeholder="Type" />
        </div>
        <div>
          <label htmlFor="abv">ABV</label> 
          <Input {...register('abv')} name="abv" placeholder="ABV" />
        </div>
        <div className="flex p-1">
        <Button 
          className="flex justify-start m-g bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskyForm