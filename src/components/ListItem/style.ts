import styled from 'styled-components';

type ContainerProps={
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
  `
  display:flex;
  background-color: ${done ? '#1E5128' : '#20212c'};
  transition: 0.8s ease;
  padding: 10px;gh
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  

  input{
      width: 20px;
      height: 20px;
      margin-right: 10px;
      
  }
  
  label{
      font-size: 18px;
      color: #c9c9c9;      
      text-decoration: ${done ? 'line-through' : 'initial'};
      
  }
  
  input:hover{
      cursor: pointer;
  }`
));