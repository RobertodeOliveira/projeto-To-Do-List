import { Home } from ".";
import { Header } from "../../components/Header";
import { render, screen } from '@testing-library/react'

describe("Header", () =>{
  it("should render correctly", () => {
    render(<Home />)

    
    expect(screen.getByText("todo")).toBeInTheDocument()
  })
})