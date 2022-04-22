import React from "react"
import { NativeBaseProvider, Heading, Button, Center } from 'native-base';

import { useRecoilState } from 'recoil';
import { textState } from "../../recoilData/textState";

const OtherPage = () => {
    const [text, setText] = useRecoilState(textState);
    
    return(
        <NativeBaseProvider>

            <Center>
 
                <Heading size="md" mt={6} pl={3}>
                This is Other pages.
                </Heading>
                <Heading size="md" mt={1} pl={3}>
                { text }
                </Heading>

                <Button colorScheme="success" onPress={ () => setText(( Math.random() + 1).toString(36).substring(5) )}>Random text</Button>

            </Center>

        </NativeBaseProvider>
    )
}

export default OtherPage


