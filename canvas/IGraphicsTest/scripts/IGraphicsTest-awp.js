class IGraphicsTest_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IGraphicsTest;
    super(options);
  }
}

registerProcessor("IGraphicsTest", IGraphicsTest_AWP);
