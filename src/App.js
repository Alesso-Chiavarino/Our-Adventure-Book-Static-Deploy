import './styles/responsive.scss';
import { AdventureModal, AdventureProvider, Adventures, BrowserRouter, Footer, Form, Home, LetterDetail, LetterForm, LetterProvider, LettersContainer, Navbar, NotFound, Route, Routes, SearchProvider, TaskDetail, TaskForm, TaskProvider, TasksContainer, Timeline, TicketsContainer, TicketProvider, TicketDetail, TicketForm } from './import';

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <TicketProvider>
          <TaskProvider>
            <AdventureProvider>
              <LetterProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/new" element={<Form />} />
                  <Route path="/new/:id" element={<Form />} />
                  <Route path="/adventures" element={<Adventures />} />
                  <Route path="/detail/:id" element={<AdventureModal />} />
                  <Route path="/adventures/:fav" element={<Adventures />} />
                  <Route path="/tasks" element={<TasksContainer />} />
                  <Route path="/tasks/:pending" element={<TasksContainer />} />
                  <Route path="/tasks/form" element={<TaskForm />} />
                  <Route path="/tasks/form/:id" element={<TaskForm />} />
                  <Route path="/tasks/detail/:id" element={<TaskDetail />} />
                  <Route path="/letters" element={<LettersContainer />} />
                  <Route path="/letters/detail/:id" element={<LetterDetail />} />
                  <Route path="/letters/form" element={<LetterForm />} />
                  <Route path="/letters/form/:id" element={<LetterForm />} />
                  <Route path="/adventures/timeline" element={<Timeline />} />
                  <Route path="/tickets" element={<TicketsContainer />} />
                  <Route path="/tickets/detail/:id" element={<TicketDetail />} />
                  <Route path="/tickets/form" element={<TicketForm />} />
                  <Route path="/tickets/form/:id" element={<TicketForm />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </LetterProvider>
            </AdventureProvider>
          </TaskProvider>
        </TicketProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
