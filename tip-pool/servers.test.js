describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should update the servertable when updateServerTable() is called", function(){
    submitServerInfo();
    updateServerTable();

    let serverList = document.querySelectorAll('#serverTable tbody tr td');
    expect(serverList[0].innerText).toEqual("Alice");
    expect(serverList[1].innerText).toEqual("$0.00");
    expect(serverList.length).toEqual(2);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
}); 
