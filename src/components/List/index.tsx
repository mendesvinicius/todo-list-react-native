import React, { useEffect, useState } from 'react';
import { Container, ContainerTitle, Reminder, Title } from './styles';
import CheckBox from '../Checkbox';
import { ListProps } from './interfaces';
import { formatDateInHours } from '../../utils/formatDate';
import { useTask } from '../../hooks/Task';
import { useNetInfo } from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const List: React.FC<ListProps> = ({
  id,
  title,
  check,
  category,
  description,
  email,
  created_at,
  updated_at,
  openModalListTask,
}) => {
  const [checked, setChecked] = useState(false);
  const { update, getTask } = useTask();
  const { isConnected } = useNetInfo();

  useEffect(() => {
    setChecked(check);
  }, []);

  const openModalAndGetTask = () => {
    getTask({
      id,
      title,
      check,
      created_at,
      description,
      category,
      email,
      updated_at,
    });
    openModalListTask();
  };

  const handleCheckTask = () => {
    if (!isConnected) {
      return Toast.show({
        type: 'error',
        text1:
          'O dispositivo se encontra offline e por isso não é possivel criar novas atividades',
      });
    }

    if (id) update(id, !checked);
    setChecked(!checked);
  };

  return (
    <Container
      key={id}
      onPress={handleCheckTask}
      onLongPress={openModalAndGetTask}>
      <CheckBox checked={checked} />
      <ContainerTitle>
        <Title checked={checked}>{title}</Title>
        {created_at && (
          <Reminder checked={checked}>{formatDateInHours(created_at)}</Reminder>
        )}
      </ContainerTitle>
    </Container>
  );
};
export default List;
