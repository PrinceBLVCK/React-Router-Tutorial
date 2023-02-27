import { act, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Users from "./components/users"

test('url params', async () => {

    
    render(
        <BrowserRouter>
            <Users />
        </BrowserRouter>
    )
    // const navigate = useInRouterContext(() => useNavigate())
    

    for(let i = 1; i < 4; i++){
        
        const link = screen.getByText(`User ${i}`)
        await expect( link ).toBeInTheDocument()
        
        
        const active = screen.getByTestId('activeBtn')
        act(() => active.click())
        await expect(screen.getByText('showing Active Users')).toBeInTheDocument()
        
        const rest = screen.getByTestId('restBtn')
        act(() => rest.click())
        await expect(screen.getByText('showing All Users')).toBeInTheDocument()

    }

    

})