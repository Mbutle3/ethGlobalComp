document.addEventListener("DOMContentLoaded", async function () {
  //const world = document.getElementsByClassName("world-id")[0];
  const world = document.getElementById("world-id");

  worldID.init(world, {
    // enable_telemetry: true,
    action_id: "wid_lshSNnaJfdt6Sohu6YAA",
    signal: "my-user-id-1",
    app_name: "My App",
    signal_description: "Receive a super cool airdrop!",
  });

  try {
    const result = await worldID.enable();
    console.log("World ID verified successfully:", result);
  } catch (failure) {
    console.warn("World ID verification failed:", failure);
    // Re-activate here so your end user can try again
  }
});
