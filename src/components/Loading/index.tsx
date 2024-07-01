import { Flex, Spinner } from '@chakra-ui/react';

type LoadingProps = {
  color?: string;
  size?: string;
};

export const Loading = ({
  color = 'tractianBlue',
  size = 'xl',
}: LoadingProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      maxH={'100vh'}
      data-testid="loading"
    >
      <Spinner size={size} color={color} />
    </Flex>
  );
};
