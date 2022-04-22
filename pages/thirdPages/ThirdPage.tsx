import React from "react"
import { NativeBaseProvider, Heading, Center } from 'native-base';

const ThirdPage = () => {
    return(
        <NativeBaseProvider>

        <Center>
            <Heading size="md" mt={6} pl={3}>
              This is third pages.
            </Heading>
        </Center>

        </NativeBaseProvider>
    )
}

export default ThirdPage