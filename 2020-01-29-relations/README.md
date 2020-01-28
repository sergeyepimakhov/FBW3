# Mongo DB Relations

## One-to-One

Assume that we have 2 entity: Identifier and Customer. For example:
```json
// Identifier
{
   _id: "12345xyz", // unique
   cardCode: "BKD2019",
}

// Customer
{
   _id: "cus123", // unique
   name: "bezkoder",
   age: 29,
   gender: "male"
}
```

We want to map Identifier and Customer relationship in that:
– One Customer has only one Identifier.
– One Identifier belongs to only one Customer.


### Normalization

In this model, an object A connects to the object B by reference to object B id or a unique identification field.

For example, Identifier has a customer_id field which value is equal to Customer object’s unique _id value.
```json
// Identifier
{
   _id: "12345xyz",
   cardCode: "BKD2019",
   customer_id: "cus123",
}

// Customer
{
   _id: "cus123",  // equal Identifier[customer_id]
   name: "bezkoder",
   age: 29,
   gender: "male"
}
```

### Denormalization

It’s easy to understand with ‘Embedded’ word. Instead of using a reference, Object A contains the whole object B, or object B is embedded inside object A.

You can see the example below, Identifier will have a nested field customer.
```json
// Identifier
{
   _id: "12345xyz",
   cardCode: "BKD2019",
   customer: {
                _id: "cus123", // Identifier[customer_id]
                name: "bezkoder",
                age: 29,
                gender: "male"
             }
}
```

### Reference 

- https://bezkoder.com/mongoose-one-to-one-relationship-example/


## One-to-Many

Assume that you want to design a Tutorial Blog data model. Here are some relationships that you can think about:

- A Tutorial has some Images (15 or less)
- A Tutorial has many Comments
- A Category has a lot of Tutorials

We call them One-to-Many relationships.

### Normalization
In the MongoDB referenced form, we keep all the documents ‘separated’ which is exactly what ‘normalized’ means.

For example, we have documents for Tutorials and Comments. Because they are all completely different document, the Tutorial need a way to know which Comments it contains. That’s why the IDs come in. We’re gonna use the Comments’ IDs to make references on Tutorial document.
```json
// Tutorial
{
  _id: "5db579f5faf1f8434098f7f5"
  title: "Tutorial #1",
  author: "bezkoder"
  comments: [ "5db57a03faf1f8434098f7f8", "5db57a04faf1f8434098f7f9" ],
}

// Comments
{
  _id: "5db57a03faf1f8434098f7f8",
  username: "jack",
  text: "This is a great tutorial.",
  createdAt: 2019-10-27T11:05:39.898Z
}

{
  _id: "5db57a04faf1f8434098f7f9",
  username: "mary",
  text: "Thank you, it helps me alot.",
  createdAt: 2019-10-27T11:05:40.710Z
}
```

## Denormalization

We can also denormalize data into a denormalized form simply by embedding the related documents right into the main document.

So now we have all the relevant data about Comments right inside in one Tutorial document without the need to separate documents, collections, and IDs.
```json
// Tutorial
{
  _id: "5db579f5faf1f8434098f7f5"
  title: "Tutorial #1",
  author: "bezkoder"
  comments: [
			  {
			    username: "jack",
			    text: "This is a great tutorial.",
			    createdAt: 2019-10-27T11:05:39.898Z
			  },
			  {
			    username: "mary",
			    text: "Thank you, it helps me alot.",
			    createdAt: 2019-10-27T11:05:40.710Z
			  }
			]
}
```

## Reference

- https://bezkoder.com/mongoose-one-to-many-relationship/


