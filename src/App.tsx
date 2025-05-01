import './App.css';
import Container from './components/container/container';
import Flex from './components/flex/flex';
import Grid from './components/grid/grid';
import ListBox from './components/listbox/lisbox';
import Spacer from './components/spacer/spacer';
import Sperator from './components/sperator/sperator';
import Title from './components/title/title';
import Typography from './components/typography/typography';

function App() {
  return (
    <Container>
      <Grid padding='30px'>
        <div className='background'></div>
        <Flex>
          <Typography>Ung Chan Vinh</Typography>
          <Typography type='level2'>Front-End Developer</Typography>
          <ListBox label='Phone:' margin='8px 0px'><Typography type='level4'>0703337127</Typography></ListBox>
          <ListBox label='Email:' margin='8px 0px'><Typography type='level4'>chanvinh41@gmail.com</Typography></ListBox>
          <ListBox label='Address:' margin='8px 0px'><Typography type='level4'>74 Tan Hung Street, District 5, Ho Chi Minh City</Typography></ListBox>
        </Flex>
      </Grid>
      <Title label='GENERAL OBJECTIVE' />
      <Typography type='level4' padding='10px 20px'>With over 3 years of experience building applications using languages such as <b>HTML, SASS, JavaScript, TypeScript,
        ReactJs, and Bootstrap</b>, my goal is to apply my skills and knowledge in a professional environment to develop
        outstanding products that provide users with an optimized experience.</Typography>
      <Title label='EDUCATION' />
      <Grid padding='10px 20px'>
        <Typography type='level4'>2018 - 04/2022</Typography>
        <Flex>
          <Typography type='level3' padding='3px 20px 0px 0px'>HUTECH - Ho Chi Minh City University of Technology</Typography>
          <Typography type='level3' padding='3px 20px 0px 0px'>Information Technology (IT)</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'>Bachelor's degree</Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Title label='EXPERIENCES' />
      <Grid padding='10px 20px'>
        <Typography type='level3'>04/2025 - Now</Typography>
        <Flex>
          <Typography type='level3' padding='3px 20px 0px 0px' decoration='underline'>ISB Vietnam - IVC</Typography>
          <Typography type='level3' padding='3px 20px 0px 0px'>UCARO System (UI)</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Tech stack:</b> NextJs, Typescript, React Hook Form, Redux Toolkit, i18n, Jest.</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Team size:</b> 4</Typography>
          <Spacer height="15px" />
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Systems:</b>
            <ul>
              <li>
                Search and gather information about universities.
              </li>
              <li>
                Register for the exam online.
              </li>
              <li>
                Download and print the exam admission ticket.
              </li>
              <li>
                Check the exam results and receive the admission notification.
              </li>
              <li>
                Complete the enrollment procedures.
              </li>
            </ul>
          </Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Responsibilities:</b>
            <ul>
              <li>
                Design components, interfaces, write Jest tests, and write QA.
              </li>
              <li>
                Deploy the system features and confirm the documentation with the client to
                finalize the page as per the client's request.
              </li>
            </ul>
          </Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Grid padding='10px 20px'>
        <Typography type='level3'>12/2024 - 04/2025</Typography>
        <Flex>
          <Typography type='level3' padding='3px 20px 0px 0px' decoration='underline'>ISB Vietnam - IVC</Typography>
          <Typography type='level3' padding='3px 20px 0px 0px'>Project Nec System (UI)</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Tech stack:</b> Angular, CSS, HTML, PostgreSQL, Excel, VB.Net, Java spring batch.</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Team size:</b> 14</Typography>
          <Spacer height="15px" />
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Systems:</b>
            <ul>
              <li>
                Manage hotel operations such as accounts, room bookings, and room management.
              </li>
            </ul>
          </Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Responsibilities:</b>
            <ul>
              <li>
                Write the Detail Design document.
              </li>
              <li>
                Write the Unit Test document.
              </li>
              <li>
                Implemented clean and robust code following DD.
              </li>
            </ul>
          </Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Grid padding='10px 20px'>
        <Typography type='level3'>12/2024 - 04/2025</Typography>
        <Flex>
          <Typography type='level3' padding='3px 20px 0px 0px' decoration='underline'>ISB Vietnam - IVC</Typography>
          <Typography type='level3' padding='3px 20px 0px 0px'>Project KWN System</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Tech stack:</b> PHP, HTML, JavaScript, JQuery, SASS, DataTableJs...</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Team size:</b> 2</Typography>
          <Spacer height="15px" />
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Systems:</b>
            <ul>
              <li>
                Manage admin activities such as account management.
              </li>
              <li>
                CRUD operations.
              </li>
              <li>
                Track progress.
              </li>
            </ul>
          </Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Responsibilities:</b>
            <ul>
              <li>
                Create admin, login, and management pages.
              </li>
              <li>
                Write management functions for login and CRUD operations in the management
                page.
              </li>
              <li>
                Upgrade PHP version from 5.0 to 8.0.
              </li>
            </ul>
          </Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Grid padding='10px 20px'>
        <Typography type='level3'>12/2024 - 04/2025</Typography>
        <Flex>
          <Typography type='level3' padding='3px 20px 0px 0px' decoration='underline'>ISB Vietnam - IVC</Typography>
          <Typography type='level3' padding='3px 20px 0px 0px'>Private Project - Core Banking System</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Tech stack:</b> TypeScript, Next.js, Redux Saga, Styled Component, i18n, Jest, ReactJs</Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Team size:</b> 14</Typography>
          <Spacer height="15px" />
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Systems:</b>
            <ul>
              <li>
                Manage banking activities such as accounts, deposits, and loans.
              </li>
            </ul>
          </Typography>
          <Typography type='level4' padding='3px 20px 0px 0px'><b>Responsibilities:</b>
            <ul>
              <li>
                Implement new features, improve code, and x issues as per client requests.
              </li>
              <li>
                Support colleagues, identify solutions, and resolve issues arising during the work
                process.
              </li>
              <li>
                Develop tools to enhance work e ciency.
              </li>
              <li>
                Review code and assist other team members.
              </li>
              <li>
                Additionally, con rm features, design documentation, and correct any errors in the
                documentation for the client.
              </li>
            </ul>
          </Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Title label='CERTIFICATION' />
      <Grid padding='10px 20px'>
        <Typography type='level3'>2022:</Typography>
        <Flex>
          <Typography type='level4' padding='3px 20px 0px 0px' >B1 English Certi cate (HUTECH - Ho Chi Minh City University of Technology)</Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Title label='SKILLS' />
      <Grid padding='10px 20px'>
        <Typography type='level3'>Programming Language:</Typography>
        <Flex>
          <Typography type='level4' padding='3px 20px 0px 0px' >JavaScript</Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Grid padding='10px 20px'>
        <Typography type='level3'>Framework:</Typography>
        <Flex>
          <Typography type='level4' padding='3px 20px 0px 0px' >ReactJs, NextJs</Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Grid padding='10px 20px'>
        <Typography type='level3'>UI Framework:</Typography>
        <Flex>
          <Typography type='level4' padding='3px 20px 0px 0px' >Boostrap, Material UI</Typography>
        </Flex>
      </Grid>
      <Sperator />
      <Title label='HOBBIES' />
      <Typography padding='10px 20px' type='level4'>Play sports and participate in activities both inside and outside the company.</Typography>
    </Container>
  );
}

export default App;
