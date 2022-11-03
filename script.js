class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }
    append(value){
      if(this.head == null){
        this.head = new Node(value)
        this.size++
      }
      else if(this.size == 1){
        this.head.nextNode = new Node(value)
        this.size++
      }
      else{
        let startPoint = this.head
        while(startPoint.nextNode !== null){
          startPoint = startPoint.nextNode
        }
        startPoint.nextNode = new Node(value)
        this.size++
      }
    }
    prepend(value){
      let newHead = new Node(value)
      newHead.nextNode = this.head
      this.head = newHead
      this.size++
    }
    size(){
      return this.size
    }
    head(){
      return this.head
    }
    tail(){
      let startPoint = this.head
      while(startPoint.nextNode !== null){
        startPoint = startPoint.nextNode
      }
      return startPoint
    }
    at(index){
      let startPoint = this.head
      for(let i = 0; i<= index; i++){
        startPoint = startPoint.nextNode
      }
      return startPoint
    }
    pop(){
      let startPoint = this.head
      let previous
      while(startPoint.nextNode !== null){
        previous = startPoint
        startPoint = startPoint.nextNode
      }
      previous.nextNode = null
    }
    contains(value){
      let startPoint = this.head
      while(startPoint.value !== null){
        if(startPoint.value === value){
          return true
        }
        startPoint = startPoint.nextNode
      }
      return false
    }
    find(value){
      let startPoint = this.head
      let index = 0
      while(startPoint.value !== null){
        if(startPoint.value === value){
          return index
        }
        startPoint = startPoint.nextNode
        index++
      }
      return null
    }
    toString(){
      let startPoint = this.head
      let stringus = ''
      while(startPoint.nextNode !== null){
        stringus+=`(${startPoint.value}) -> `
        startPoint = startPoint.nextNode
      }
      stringus+=`(${startPoint.value})`
      return stringus
    }
}

class Node{
  constructor(value){
    this.value = value
    this.nextNode = null
  }
}