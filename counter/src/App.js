import { Counter } from "./components/Counter"
import { Increment } from "./components/Increment"

export const App = () => {
  return (
    <div>
      <div>
        <Increment />
      </div>
      <div>
        <Counter />
      </div>
      
    </div>
  )
}