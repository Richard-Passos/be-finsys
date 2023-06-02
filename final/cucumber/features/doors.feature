Feature: Doors

  Scenario: Elevator closing its doors
    Given That the elevator is being requested at a floor
    When The elevator is ready to go
    Then The Elevator should close its doors
    And Answer the request

  # Using "shut" as a synonymous for "close", so it don't break cucumber
  Scenario: Elevator shuting its doors
    Given That a user wanna close the elevator doors
    When The user press the button to close the elevator doors
    Then The Elevator should shut its doors
    

  Scenario: Elevator opening its doors
    Given That the elevator is requested at a floor
    When The elevator arrive at the requested floor
    Then The Elevator should open its doors

  # Using "open up" as a synonymous for "open", so it don't break cucumber
  Scenario: Elevator is opening up its doors
    Given That a user wanna open the elevator doors
    When The user press the button to open the elevator doors
    Then The Elevator should open up its doors

  Scenario: Elevator keeping its doors open
    Given That are something between elevator doors
    Then The Elevator should keep its doors open