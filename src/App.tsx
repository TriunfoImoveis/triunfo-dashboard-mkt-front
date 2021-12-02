import React, { ChangeEvent, useCallback, useState } from 'react';
import {Background} from './assets/images';
import {
  Container,
  Header,
  Title,
  Content,
  LeftSide,
  RightSide,
  Card,
  CardTitle,
  Quantidade,
  LeftContainer,
  RightContent,
  Row,
  RowTitle,
  RowQuantity,
  Goal
} from './global/styles';
import { useFetch } from './hooks/useFetch';

interface ResponseData {
  canais: {
    name: string;
    value: string;
  }[];
  google: {
    name: string;
    value: string;
  }[];
  funil: {
    name: string;
    value: string;
    porcentValue: number;
    porcent: string;
    meta: number;
  }[]
}

function App() {
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const { data } = useFetch<ResponseData>(`/dashboard?month=${month}`);

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const {value} = event.target;
    setMonth(Number(value));
  }, [])
  return (
    <Container>
      <Background />
      <Header>
        <Title>Dashboard</Title>
        <select defaultValue={month} onChange={handleChange}>
          <option value={1}>Janeiro</option>
          <option value={2}>Fevereiro</option>
          <option value={3}>Março</option>
          <option value={4}>Abril</option>
          <option value={5}>Maio</option>
          <option value={6}>Junho</option>
          <option value={7}>Julho</option>
          <option value={8}>Agosto</option>
          <option value={9}>Setembro</option>
          <option value={10}>Outubro</option>
          <option value={11}>Novembro</option>
          <option value={12}>Dezembro</option>
        </select>
      </Header>
      <Content>
        <LeftSide>
          <h2>CANAIS: </h2>
          <LeftContainer>
            {data?.canais.map(item => (
              <Card>
                <CardTitle>{item.name}</CardTitle>
                <Quantidade>{item.value}</Quantidade>
              </Card>
            ))}
          </LeftContainer>
          <h2>GOOGLE: </h2>
          <LeftContainer>
            {data?.google.map(item => (
              <Card>
                <CardTitle>{item.name}</CardTitle>
                <Quantidade>{item.value}</Quantidade>
              </Card>
            ))}

          </LeftContainer>
        </LeftSide>
        <RightSide>
          <h2>FUNIL DE VENDAS</h2>
          <RightContent>
            <Row className="header">
              <RowTitle>Etapa</RowTitle>
              <RowQuantity>
                <span>QTD</span>
                <span>%</span>
              </RowQuantity>
              <Goal>Meta</Goal>
            </Row>
            <Row>
              <RowTitle>{data?.funil[0].name}</RowTitle>
              <RowQuantity>
                <span>
                  {data?.funil[0].value}
                </span>
                <span>
                  0%
                </span>
              </RowQuantity>
              <Goal>{data?.funil[0].value}</Goal>
            </Row>
            {data?.funil.map((item, index) => (
              index > 0 ? (
                <Row>
                  <RowTitle>{item.name}</RowTitle>
                  <RowQuantity>
                    <span>
                      {item.value}
                    </span>
                    <span className={item.porcentValue > 50 ? 'ok': 'erro'}>
                      {item.porcent}
                    </span>
                  </RowQuantity>
                  <Goal>{item.meta}</Goal>
                </Row>
              ) : <></>

            ))}

          </RightContent>
        </RightSide>
      </Content>
    </Container>
  );
}

export default App;
