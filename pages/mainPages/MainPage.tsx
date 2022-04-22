import React from "react"
import { NativeBaseProvider, Heading, Center } from 'native-base';

import { useRecoilState } from 'recoil';
import { textState } from "../../recoilData/textState";

const MainPage = () => {
    const [text, setText] = useRecoilState(textState);

    return(
        <NativeBaseProvider>

            <Center>
                <Heading size="md" mt={6} pl={3}>
                    This is Home pages.
                </Heading>

                <Heading size="md" mt={1} pl={3}>
                    { text }
                </Heading>
            </Center>

            

        </NativeBaseProvider>
    )
}

export default MainPage
