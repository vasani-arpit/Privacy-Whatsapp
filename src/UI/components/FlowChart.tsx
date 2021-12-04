import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { display } from '@mui/system';
import '../../UI/index.css';

const Container = styled.div`

  display: flex;
  justify-content: center; // 1
  flex-flow: column wrap; // 2
  width: 100%;
  height: 100%;
  border-radius: 1vh;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: row wrap; // 4
`;

const Card = styled.div`
  margin: 20px;
  background: #fff;
  height: fit-content;
  width: 30vw;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction:row;
 padding-top:3vh;
  justify-content: space-around;
  
  &:hover {
    transform:scale(1.1);
    transition: transform .2s;
  }
 
`;

const itemsArr: any[] = [{
    title: 'When',
    id: uuidv4(),
    icon: ""
},
{
    title: 'Set',
    id: uuidv4(),
    icon: ""
}]
function FlowChart() {
    const [list, setList] = useState(itemsArr);

    const handleAdd = (title: string, id: string) => {
        console.log("add new", id);
        const newList = list.concat({ title, id: uuidv4() });

        setList(newList);
    }
    const handleRemove = (id: string) => {
        console.log("removing of id:", id);
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
    }
    return (

        <Container>
            <List>
                {list.map((item) =>
                    <Card key={item.id}>
                        
                      
                        
                         
                         <p style={{ fontFamily:"monospace", fontSize:18, fontWeight:200}}>
                        {item.title}
                        </p>
                        <p style={{color:"green", fontSize:18, cursor:"pointer"}} onClick={() => handleAdd("title", item.id)}><IoAddCircleOutline/> </p>
                        <p style={{color:"red", fontSize:18, cursor:"pointer"}} onClick={() => handleRemove(item.id)}> <IoCloseCircleOutline/></p>
                        
                      

                    </Card>)}
            </List>
        </Container>

    )
}






export default FlowChart


