Feature: Emergency

  Scenario: Elevator activating its emergency actions
    Given That the elevator is malfunctioning
    When The system realizes the malfunction
    Then The Elevator should activate its emergency actions
  
  Scenario Outline: Elevator activating its emergency instructions
    Given That the elevator is having malfunction
    When The emegency button <isPressed>
    Then The Elevator should <instructions>

  Examples:
    | isPressed | instructions                                                                                                                     |
    | true      | "Calling security and fire department... Voice message: You can calm down, the security has been called. They will arrive soon!" |
    | false     | "Nothing"                                                                                                                        |