import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #f2f2f2;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const CheckButton = styled(Button)`
  margin-top: 20px;
  align-self: stretch;
  margin-bottom: 20px;
`;

export const CheckList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CheckinItem = styled.View`
  background: #fff;
  padding: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Number = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const CheckDate = styled.Text`
  font-size: 14px;
  color: #666;
`;
