import {Flex, Button, Stack} from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { useForm, SubmitHandler} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória'),
  })

  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  const {errors} = formState;

  return (
   <Flex 
    w="100vw" 
    h="100vh" 
    alignItems="center" 
    justifyContent="center"
   >
     <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
     >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            {...register("email")}
            error={errors.email}
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha" 
            {...register("password")}
            error={errors.password}
          />         
        </Stack>
        <Button 
          type="submit" 
          mt="6" 
          colorScheme={'pink'}
          isLoading={formState.isSubmitting}
        >Entrar
        </Button>
     </Flex>
   </Flex>
  )
}
