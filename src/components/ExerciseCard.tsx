import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons'

type ExerciseCardProps = TouchableOpacityProps

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return ( 
    <TouchableOpacity {...rest }>
      <HStack bg='gray.500' p={2} pr={4} rounded='md' alignItems='center' overflow='hidden' mb={3}>
        <Image 
          source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
          alt='Imagem do Exercício'
          w={16}
          h={16}
          mr={4}
          rounded='md'
          resizeMode='cover'
        />

        <VStack flex={1}>
          <Heading fontSize='lg' color='gray.100' fontFamily='heading'>
            Remada Unilateral 
          </Heading>

          <Text color='gray.200' fontSize='sm' mt={1} numberOfLines={2}>
            3 Séries x 12 repetições 
          </Text>
        </VStack>

        <Icon 
          as={Entypo}
          name='chevron-thin-right'
          color='gray.300'
          size={4}
        />
      </HStack>
    </TouchableOpacity>
  )
}