import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import {AnimatedContainer} from "../Components/views";
import Loading from "../assets/Loading.svg";

interface SpinningIconProps {
  duration?: number;
  isSpinning?: boolean;
  size?: number;
  color?: string;
}

const SpinningIcon: React.FC<SpinningIconProps> = ({
  duration = 2000,
  isSpinning = true,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  const startSpinning = () => {
    spinValue.setValue(0);

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    if (isSpinning) {
      startSpinning();
    } else {
      spinValue.stopAnimation();
    }

    return () => {
      spinValue.stopAnimation();
    };
  }, [isSpinning, duration]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
      <AnimatedContainer
        style={{
          transform: [{ rotate: spin }],
        }}
      >
        <Loading width={40} height={40}/>
      </AnimatedContainer>
  );
};

export default SpinningIcon;