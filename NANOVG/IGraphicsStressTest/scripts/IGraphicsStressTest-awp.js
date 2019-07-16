/* Declares the IGraphicsStressTest Audio Worklet Processor */

class IGraphicsStressTest_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IGraphicsStressTest;
    super(options);
  }
}

registerProcessor("IGraphicsStressTest", IGraphicsStressTest_AWP);
