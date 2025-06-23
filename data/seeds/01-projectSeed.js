exports.seed = async function (knex) {
    await knex("projects").del();
    await knex("projects").insert([
      {
        project_name: "Help those in need",
        project_description: "gather donations to give those in need",
        project_completed: true,
      },
      {
        project_name: "Build a condo",
        project_description: "start putting materials together",
        project_completed: false,
      }, 
      {
        project_name: "Bake cookies",
        project_description: "start baking cookies for the bake sale",
        project_completed: true,
      },
    ]);
  };