// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 < 0.90;

contract Land{

    enum State  { SOLD , LIVE } 
    State public state;
    
    struct LandInfo{
       uint id ;
       string Type;
       address Address;
       uint Cost;
       string city;
       
    }
    uint ID;
    // mapping(address=>uint) NoOfLand;
    
     
     address public admin;
    constructor(address Address)
    {
        admin = Address;
    }

 modifier onlyAdmin{
    require(msg.sender==admin,"Only Owner is allowed");             // declaring authentication   
    _;
}
LandInfo[] landinfos;

function registerProperty(string memory _Type, address _Address, uint _cost, string memory _city) public returns(bool){

landinfos.push(LandInfo(ID+1,_Type,_Address,_cost,_city));
return true;

}

function getAllProperty() public view returns (LandInfo [] memory){
return landinfos;
}

function getPropertyByAddress(address _Address) public view returns(LandInfo [] memory ){
uint count = 0;
for(uint i=0; i<landinfos.length; i++){
    if(landinfos[i].Address==_Address){
        count++;
    }
}
LandInfo[] memory Add = new LandInfo[](count);
uint j=0;
for(uint i=0; i<landinfos.length; i++){
    if(landinfos[i].Address==_Address){
        Add[j].id = landinfos[i].id;
         Add[j].Type = landinfos[i].Type;
          Add[j].Address = landinfos[i].Address;
           Add[j].Cost = landinfos[i].Cost;
            Add[j].city = landinfos[i].city;
            j++;
    }
}
return Add;

}

function getPropertyByType(string memory _Type) public view returns(LandInfo [] memory ){
uint count = 0;
for(uint i=0; i<landinfos.length; i++){
    if(keccak256(abi.encodePacked(landinfos[i].Type))==keccak256(abi.encodePacked(_Type))){
        count++;
    }
    
     
}
LandInfo[] memory Add = new LandInfo[](count);
uint j=0;
for(uint i=0; i<landinfos.length; i++){
    if(keccak256(abi.encodePacked(landinfos[i].Type))==keccak256(abi.encodePacked(_Type))){
        Add[j].id = landinfos[i].id;
         Add[j].Type = landinfos[i].Type;
          Add[j].Address = landinfos[i].Address;
           Add[j].Cost = landinfos[i].Cost;
            Add[j].city = landinfos[i].city;
            j++;
    }
}
return Add;

}


}