class IPlugControls_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlugControls;
    super(options);
  }
}

registerProcessor("IPlugControls", IPlugControls_AWP);
