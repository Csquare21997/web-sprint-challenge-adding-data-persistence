exports.seed = async function (knex) {
    await knex("tasks").del();
    await knex("tasks").insert([
       {
       
        task_description: "Remove rocks and weeds",
        task_notes:"help",
        task_completed: true,
        project_id: 1,
      },
      {
        
        task_description: "Use donated seeds",
        task_notes:"help",
        task_completed: false,
        project_id: 1
      }, 
      {
        
        task_description: "Split the map into 5 zones",
        task_notes:"help",
        task_completed: true,
        project_id: 2
      },
    ]);
  };