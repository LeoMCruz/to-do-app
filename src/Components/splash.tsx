import React from "react";
import { Container, SafeAreaView, SplashView } from "./views";
import Ship from "../assets/ship.svg";

export default function Splash(){
    return(
    <SafeAreaView>
        <Container>
            <SplashView>
                <Ship width={163} height={193}/>
            </SplashView>
        </Container>
    </SafeAreaView>
    );
}