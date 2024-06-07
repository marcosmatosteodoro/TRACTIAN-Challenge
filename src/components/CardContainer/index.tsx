import { Card, Container } from '@chakra-ui/react';

type CardContainerProps = {
  children: React.ReactNode;
  padding?: string;
};

export const CardContainer = ({ children, padding }: CardContainerProps) => (
  <Container maxW={'1700px'}>
    <Card
      borderRadius={'4px'}
      borderWidth={'1px'}
      p={padding ?? '16px'}
      m={0}
      gap={'12px'}
      borderColor={'#D8DFE6'}
      bg={'#fff'}
      h={'100%'}
      w={'100%'}
      data-testid="card-container"
    >
      {children}
    </Card>
  </Container>
);
