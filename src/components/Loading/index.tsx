import { Flex, Spinner } from '@chakra-ui/react';

type LoadingProps = {
  color?: string;
  size?: string;
};

export const Loading = ({ color = 'blue.500', size = 'xl' }: LoadingProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      data-testid="loading"
    >
      <Spinner size={size} color={color} />
    </Flex>
  );
};
