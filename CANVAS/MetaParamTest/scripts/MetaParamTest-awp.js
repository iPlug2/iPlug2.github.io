/* Declares the MetaParamTest Audio Worklet Processor */

class MetaParamTest_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.MetaParamTest;
    super(options);
  }
}

registerProcessor("MetaParamTest", MetaParamTest_AWP);
