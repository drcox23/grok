package server

import (
	"os"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

func createSession(addr string) (*mgo.Session, error) {
	session, err := mgo.Dial(addr)
	if err != nil {
		panic(err)
	}

	return session.Copy(), err
}

func getSpecific(id string) ([]card, error) {
	session, err := createSession("mongo:" + os.Getenv("MONGO"))
	defer session.Close()

	c := session.DB("grok").C("cards")

	// result := card{}
	// err = c.Find(bson.M{"user_id": id, "is_deleted": false}).One(&result)
	// err = c.Find(bson.M{"user_id": id}).One(&result)

	var results []card
	err = c.Find(bson.M{"user_id": id}).All(&results)

	if err != nil {
		panic(err)
	}

	// return result, err
	return results, err
}

//Get all cards that is in the id's (the id that is being passed through) users key
func getAll(id string) ([]card, error) {
	session, err := createSession("mongo:" + os.Getenv("MONGO"))
	defer session.Close()

	c := session.DB("grok").C("cards")

	result := card{}
	err = c.Find(bson.M{"user_id": id, "is_deleted": false}).One(&result)

	if err != nil {
		panic(err)
	}

	var results []card
	err = c.Find(bson.M{"user_id": bson.M{"$in": result.Users}, "is_deleted": false}).All(&results)

	return results, err
}

func addCard(data *newCard) (card, error) {
	session, err := createSession("mongo:" + os.Getenv("MONGO"))
	defer session.Close()

	c := session.DB("grok").C("cards")
	err = c.Insert(data)

	result := card{}
	err = c.Find(bson.M{"user_id": data.User_id}).One(&result)

	if err != nil {
		panic(err)
	}

	return result, err
}

func updateCard(id string, data *newCard) (card, error) {
	session, err := createSession("mongo:" + os.Getenv("MONGO"))
	defer session.Close()

	c := session.DB("grok").C("cards")
	err = c.Update(bson.M{"user_id": id}, data)

	result := card{}
	err = c.Find(bson.M{"user_id": id}).One(&result)

	if err != nil {
		panic(err)
	}

	return result, err
}

func deleteCard(id string) (card, error) {
	session, err := createSession("mongo:" + os.Getenv("MONGO"))
	defer session.Close()

	c := session.DB("grok").C("cards")
	err = c.Update(bson.M{"user_id": id}, bson.M{"$set": bson.M{"is_deleted": true}})

	result := card{}
	err = c.Find(bson.M{"user_id": id}).One(&result)

	if err != nil {
		panic(err)
	}

	return result, err
}
