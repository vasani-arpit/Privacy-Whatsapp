import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IoAddCircleOutline, IoArchiveOutline, IoOptions } from "react-icons/io5";
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

  width: 30vw;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  padding:2vh;
  
  &:hover {
    transform:scale(1.1);
    transition: transform .2s;
  }
 
`;

interface optionsType{
  desc:string; 
  id:string;
}

interface option{
  title:string;
  options: Array<optionsType>;
  id:string;
  icon:string;
}

export const itemsArr: Array<option> = [{
    title: 'When',
    options:[{
      
        desc: 'Recieve message',
        id: uuidv4()
    },
    {
        desc: 'Added to a group',
        id: uuidv4()
    },
    {
        desc: 'Status update ',
        id: uuidv4()
    
    }],
    id: uuidv4(),
    icon: ""
},
{
    title: 'Set',
    options:[{
      desc: 'reply to message',
      id: uuidv4()
  },
  {
      desc: 'approve the group',
      id: uuidv4()
  },
  {
      desc: 'view update ',
      id: uuidv4()
  }],
    id: uuidv4(),
    icon: ""
}]


function FlowChart(props:any) {
    const [list, setList] = useState(itemsArr);
    const [optionTitle, setOptionTitle]= useState("When");
    const [chipText, setChipText]= useState("recieve message");


    const handleAdd = (title: string, id: string) => {
        console.log("add new", id);
        const newList = list.concat({ title, id: uuidv4(), options:[], icon:"" });

        setList(newList);
    }
    const handleRemove = (id: string) => {
        console.log("removing of id:", id);
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    const handleCardClick=(title: string)=>{
        console.log(title);
        setOptionTitle(title);
        props.parentCallback(title);
    }

    console.log(optionTitle);

    return (

        <Container>
            <List>
                {list.map((item) =>
                    <Card key={item.id} >
                        <div style={{display:"flex", justifyContent:"space-around", float:"right"}}>
                        <p style={{color:"green", fontSize:18, cursor:"pointer"}} onClick={() => handleAdd("title", item.id)}><IoAddCircleOutline/> </p>
                         <p style={{color:"red", fontSize:18, cursor:"pointer"}} onClick={() => handleRemove(item.id)}> <IoArchiveOutline/></p>
                        </div>
                      <br/>
                      <div style={{display:"flex", justifyContent:"space-around"}}>
                      <p style={{ fontFamily:"tahoma", fontSize:16, fontWeight:200, cursor:"pointer"}}
                      onClick={()=>handleCardClick(item.title)}>
                        {item.title}
                        </p>
                        </div>
                        {optionTitle=="When"?
                        ( <div className="chip">
                        {item.options[0].desc}
                    </div>):(
                       <div className="chip">
                       {item.options[0].desc}
                   </div>
                    )}
                     
                    </Card>)}
            </List>
        </Container>

    )
}

export default FlowChart


