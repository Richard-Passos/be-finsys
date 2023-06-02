Feature: Move elevator

  Scenario Outline: Elevator passing by floors and stoping at the requested floor
    Given That a user wanna go to floor <destinyFloor>
    And User is at floor <currentFloor>
    When User press the button with the destiny floor number
    Then The Elevator should go to te destiny floor
    And Return it <routeNActions>
    
  Examples:
    | currentFloor | destinyFloor | routeNActions |
    | 1            | 5            | Closing doors... Going from floor 1, to floor 5, passing by floor(s) 2, 3 and 4. Opening doors... |
    | 5            | 1            | Closing doors... Going from floor 5, to floor 1, passing by floor(s) 4, 3 and 2. Opening doors... |
    | -1           | 0            | Closing doors... Going from floor -1, to floor 0, passing by none floors. Opening doors...        |
    | 0            | 0            | Already on the destiny floor.                                                                     |
    