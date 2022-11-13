import { BlogInterfaceContainer } from "./styles"
import { AiFillGithub } from 'react-icons/ai';
import { FaBuilding } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { Header } from "../../components/Header";
import { AboutProfile } from "../../components/AboutProfile";
import axios from 'axios'



export function BlogInterface(){
  const response = axios.get('https://api.github.com/users/luccapasqua');
  console.log(response)

  return(
    <>
      <Header/>
      <AboutProfile profileResponse={response.data}/>

      <BlogInterfaceContainer>
        <div>
          <div className='publicacao'>
            <h2>Publicações</h2>
            <p>6 publicações</p>
          </div>
          <form>
            <input type="text" placeholder="Buscar conteúdo"/>
          </form>
        </div>

        <div className="allPosts">
          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>

          <div className="post">
            <div>
              <h1>
                JavaScript data types and data structures
              </h1>
              <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. 
            </p>
            
          </div>
        </div>
        
        
      </BlogInterfaceContainer>
    </>
    
  )
}