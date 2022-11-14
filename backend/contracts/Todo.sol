// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Todo{


    // Add s_ to the variable name to indicate that it is a state variable | state or storage
    // Add i_ to the immutable variable 
    // constants are immutable by default and always written in Captial form
    // Add v_ to the variable name to indicate that it is a local variable | view or memory
    // Add p_ to the variable name to indicate that it is a parameter variable | pure or memory
    // Add m_ to the variable name to indicate that it is a memory variable | memory
    // Add c_ to the variable name to indicate that it is a calldata variable | calldata
    // Add t_ to the variable name to indicate that it is a temporary variable | memory
    // Add _ to the variable name to indicate that it is a private variable

// /**
//  * @title Twitter Contract
//  * @dev Store & retrieve value in a variable
//  */

    event TaskCreated(address recipient, uint taskId);
    // State Variables
    struct Task {
        uint256 id;
        address userAddress;
        string title;
        string description;
    }

    Task[] private tasks;

    // Mapping of Tweet id to the wallet address of the user
    mapping(uint256 => address) taskToOwner;

    function createTask(string memory p_title, string memory p_description) public {
        Task memory t_task = Task(tasks.length, msg.sender, p_title, p_description);
        tasks.push(t_task);
        taskToOwner[tasks.length] = msg.sender;  
        emit TaskCreated(msg.sender, tasks.length);
    }


    // Get task by addresss
    function getTaskByAddress() public view returns (Task[] memory) {
        Task[] memory t_tasks = new Task[](tasks.length);
        uint256 t_index = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender) {
                t_tasks[t_index] = tasks[i];
                t_index++;
            }
        }
        return t_tasks;
    }



}