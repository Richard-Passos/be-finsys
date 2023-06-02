Feature: Control weight

  Scenario Outline: Elevator controling its current weight
    Given That the elevator currentWieght is <currentWeight>
    And The elevator max weight is <maxWeight>
    Then The Elevator must <response>
    
  Examples:
    | currentWeight | maxWeight | response                                                                                    |
    | 500           | 600       | ""                                                                                          |
    | 700           | 600       | "Activing emergency breaks... Voice message: Max weight reached, please exit the elevator." |
    | 600           | 600       | "Activing emergency breaks... Voice message: Max weight reached, please exit the elevator." |
     