exports.seed = async function (knex) {
    await knex("resources").del();
    await knex("resources").insert([
      {
        resource_name: "Hearts in Action",
        resource_description: "Mobilize support and collect donations to uplift lives and bring hope to those facing hardship.",
    
      },
      {
        resource_name: "Hands of Hope",
        resource_description: "Bring together caring individuals to gather essential supplies and support for people in need, one generous act at a time.",
        
      }, 
      {
        resource_name: "Kindness Connect",
        resource_description: "Create a network of giving—collect donations and direct them to where they can make the greatest impact for those struggling.",
        
      },
    ]);
  };